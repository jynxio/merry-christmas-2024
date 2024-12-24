import { BackgroundLines } from '@/components/ui/background-lines';
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerTitle,
} from '@/components/ui/drawer';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import React from 'react';

const Comp = React.forwardRef<HTMLDivElement, { isOpen: boolean }>(({ isOpen }, ref) => {
    const account = 'dummy@protonmail.com';
    const password = 'happy-christmas-2024';

    const accountWords = Array.from<string>(account).map(char => ({ text: char }));
    const passwordWords = Array.from<string>(password).map(char => ({ text: char }));

    return (
        <Drawer open={isOpen}>
            <DrawerContent ref={ref} className="isolate">
                <DrawerTitle className="hidden" />
                <DrawerDescription className="hidden" />

                <BackgroundLines className="flex flex-col items-center justify-center w-full !h-[15rem] px-4">
                    <section className="flex flex-col items-center font-mono leading-relaxed">
                        <span className="text-muted-foreground/70">{'/* Account */'}</span>
                        <TypewriterEffectSmooth words={accountWords} className="m-0 text-lg" />
                    </section>

                    <hr className="my-5 border-0" />

                    <section className="flex flex-col items-center font-mono leading-relaxed">
                        <span className="text-muted-foreground/70">{'/* Password */'}</span>
                        <TypewriterEffectSmooth words={passwordWords} className="m-0 text-lg" />
                    </section>
                </BackgroundLines>

                <DrawerFooter className="relative z-50 flex flex-col items-center pt-0 pb-2 gap-0 text-sm">
                    <a
                        href="https://github.com/jynxio/merry-christmas-2024"
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer opacity-25"
                    >
                        GitHub | Code
                    </a>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
});

Comp.displayName = 'Pass';

export default Comp;
