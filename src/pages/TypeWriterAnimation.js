import { Typewriter } from 'react-simple-typewriter';

function TypeWriterAnimation(){
    return(
        <h1 className="text-xl md:text-2xl mt-4 mb-4 text-gray-300 animate-flyIn">
            a{' '}
            <span className="text-red-600 font-semibold">
            <Typewriter
                words={['frontend developer', '.NET developer', 'tech enthusiast']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
            />
            </span>
        </h1>
    );
}

export default TypeWriterAnimation;