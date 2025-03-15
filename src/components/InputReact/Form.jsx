// Step 1: Identify your component’s different visual states 
// Step 2: Determine what triggers those state changes 
// Step 3: Represent the state in memory with useState 
// Step 4: Remove any non-essential state variables 
// Step 5: Connect the event handlers to set state 
import React, { useState } from 'react'

const Form = () => {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'

    if (status === "success") {
        return <h1>That's right!</h1>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");
        try {
            await submitForm(answer);
            setStatus("success");
        } catch (err) {
            setStatus("typing");
            setError(err);
        }
    }

    const handleTextareaChange = (e) => {
        setAnswer(e.target.value);
    }

    const submitForm = (answer) => {
        // Pretend it's hitting the network.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== "lima";
                if (shouldError) {
                    reject(new Error("Good guess but a wrong answer. Try again!"));
                } else {
                    resolve();
                }
            }, 1500);
        });
    }
 
  return (
    <div>
        <h2>City Quiz</h2>
        <p>In which city is there a billboard that turns air into drinkable water?</p>

        <form action="" onSubmit={handleSubmit}>
            <textarea 
                value={answer}
                onChange={handleTextareaChange} 
                disabled={status === "submitting"} 
            /><br />
            <button disabled={status === "submitting" || answer.length === 0}>Submit</button>

            {error !== null && <p className="Error">{error.message}</p>} 
        </form>
      
    </div>
  ) 
}

export default Form
