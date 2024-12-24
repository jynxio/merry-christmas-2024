import Help from '@/components/help';
import React from 'react';
import Ball from './ball';
import Input from './input';
import Pass from './pass';

function Exchange() {
    const passRef = React.useRef<HTMLDivElement>(null);

    const [isWrong, setIsWrong] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const placeholders = ['Enter the barcode'];

    React.useEffect(() => {
        globalThis.addEventListener('click', handleClick);
        globalThis.addEventListener('keydown', handleKeydown);

        return () => {
            globalThis.removeEventListener('click', handleClick);
            globalThis.removeEventListener('keydown', handleKeydown);
        };

        function handleClick(e) {
            if (!passRef.current) return;
            if (passRef.current.contains(e.target)) return;

            setIsOpen(false);
        }

        function handleKeydown(e: KeyboardEvent) {
            if (!passRef.current) return;
            if (['enter', 'escape'].some(item => e.key.toLowerCase() === item)) setIsOpen(false);
        }
    }, []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const redeemCode = formData.get('redeem-code');

        if (redeemCode === '1234567890') {
            setIsOpen(true);
        } else {
            setIsWrong(true);

            setTimeout(() => setIsWrong(false), 400);
        }
    };
    return (
        <div className="flex flex-col items-center h-full py-4">
            <section className="grow">
                <Ball isWrong={isWrong} />
            </section>
            <section className="flex shrink-0 items-center gap-x-2">
                <Input placeholders={placeholders} onSubmit={onSubmit} isWrong={isWrong} />
                <Help />
            </section>
            <Pass ref={passRef} isOpen={isOpen} />
        </div>
    );
}

export default Exchange;
