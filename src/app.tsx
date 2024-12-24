import Background from '@/components/background';
import Exchange from '@/components/exchange';
import Panel from '@/components/panel';
import { ThemeProvider } from './components/theme-provider';

const paragraphs = [
    {
        title: 'What?',
        desc: `\nOne month of Poe.com membership.\nPoe.com is an AI model aggregation platform that provides all the best models, including ChatGPT, Claude, and Gemini.`,
    },
    {
        title: 'Why?',
        desc: `\nI believe it will be very useful for you.\nPoe.com offers Claude-Sonnet-3.5, which is better than ChatGPT's 4o and o1-min models.`,
    },
    {
        title: 'How?',
        desc: `\nEnter the barcode on the Pop Mart packaging.\nYou'll get a Proton Mail address to use as your Poe.com account and for receiving login verification codes.`,
    },
];

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Background>
                <Panel paragraphs={paragraphs} exchange={<Exchange />} />
            </Background>
        </ThemeProvider>
    );
}

export default App;
