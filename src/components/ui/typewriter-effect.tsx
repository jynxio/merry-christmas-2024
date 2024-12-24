'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // split text inside of words into array of characters
    const wordsArray = words.map(word => {
        return {
            ...word,
            text: word.text.split(''),
        };
    });
    const renderWords = () => {
        return (
            <div>
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(`dark:text-white text-black `, word.className)}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cn('flex space-x-1 my-6', className)}>
            <motion.div
                className="overflow-hidden"
                initial={{
                    width: '0%',
                }}
                whileInView={{
                    width: 'fit-content',
                }}
                transition={{
                    duration: 2,
                    ease: 'linear',
                    delay: 1,
                }}
            >
                <div
                    style={{
                        whiteSpace: 'nowrap',
                    }}
                >
                    {renderWords()}{' '}
                </div>{' '}
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,

                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                className={cn('block w-[2px]  h-[1.75rem] bg-[#0c59df]', 'jynxio', cursorClassName)}
            ></motion.span>
        </div>
    );
};
