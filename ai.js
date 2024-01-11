//core
import {default as readline} from 'readline';

//internal
import OPENAI_API_KEY from '../keys.js';

//external
import 'openai/shims/web';
import OpenAI from 'openai';

const openai = new OpenAI(
    {
        apiKey: OPENAI_API_KEY
    }
);

const rl = readline.createInterface(
    { 
        input:process.stdin, 
        output:process.stdout 
    }
);

const messages=[];

async function main() {
    rl.question(
        'YOU> ',
        process_prompt
    );
}

async function process_prompt(prompt){
    messages.push(
        { role: 'user', content: prompt }
    );

    const stream = await openai.chat.completions.create(
        {
            //model: 'gpt-3.5-turbo-1106',
            model: 'gpt-4-1106-preview',
            messages: messages,
            stream: true,
        }
    );
    
    let resp='';

    console.log('\nGPT:\n');

    for await (const chunk of stream) {
        const data=chunk.choices[0]?.delta?.content || '';

        process.stdout.write(data);
        resp+=data;
    }

    messages.push(
        { role: 'assistant', content: resp }
    );

    console.log('\n');

    main();
}

main();
