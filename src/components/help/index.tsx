import helpImgUrl from '@/assets/help.webp?url';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/animated-modal';

export function Help() {
    return (
        <Modal>
            <ModalTrigger className="h-fit w-fit rounded-full disabled:bg-gray-100 bg-black dark:bg-transparent dark:disabled:bg-transparent text-gray-300 !p-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-help"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                </svg>
            </ModalTrigger>
            <ModalBody>
                <ModalContent className="justify-center items-center gap-y-1">
                    <img
                        width={360}
                        height={360}
                        src={helpImgUrl}
                        className="rounded-md max-h-full max-w-full"
                    />
                    <span className="text-white">{'(💡 In dev? Try "1234567890"!)'}</span>
                </ModalContent>
            </ModalBody>
        </Modal>
    );
}

export default Help;
