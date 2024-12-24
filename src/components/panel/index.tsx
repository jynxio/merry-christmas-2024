import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { IconArrowRight } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

type Props = {
    exchange: React.ReactNode;
    paragraphs: { title: string; desc: string }[];
};

const SplitterPanel = ({ paragraphs, exchange }: Readonly<Props>) => {
    const [active, setActive] = React.useState(0);
    const currParagraph = paragraphs[active];
    const title = currParagraph.title;
    const characters = currParagraph.desc.split('').map(item => [crypto.randomUUID(), item]); // [uuid, character]

    return (
        <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
            <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-10">
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>{exchange}</AnimatePresence>
                    </div>
                </div>

                <div className="flex justify-between flex-col py-4">
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                        <h3 className="text-2xl font-bold dark:text-white text-black">{title}</h3>
                        <motion.p className="text-lg text-gray-500 dark:text-neutral-300">
                            {characters.map(([uuid, character], index) => {
                                if (character === '\n') return <Enter key={uuid} />;

                                return (
                                    <FadeInCharacter key={uuid} delay={0.02 * index}>
                                        {character}
                                    </FadeInCharacter>
                                );
                            })}
                        </motion.p>
                    </motion.div>

                    <div className="flex gap-4 pt-12 md:pt-0">
                        <HoverBorderGradient
                            as="button"
                            containerClassName="rounded-md"
                            onClick={() => setActive((active + 1) % paragraphs.length)}
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            <IconArrowRight className="h-4 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
                        </HoverBorderGradient>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Enter() {
    return (
        <span>
            <br />
            <span className="inline-block h-8 w-[3.5ch]" />
        </span>
    );
}

function FadeInCharacter({ delay, children }: Readonly<PropsWithChildren<{ delay: number }>>) {
    return (
        <motion.span
            className="inline-block whitespace-pre"
            initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut', delay }}
        >
            {children}
        </motion.span>
    );
}

export default SplitterPanel;
