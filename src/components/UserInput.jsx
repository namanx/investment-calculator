

export default function UserInput({onChange ,UserInput}){



    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial Investment</label>
                <input type="number"
                 required
                 value={UserInput.initialInvestment} 
                onChange={(event) => onChange('initialInvestment',event.target.value)}/>
            </p>
            <p>
                <label htmlFor="">Annual Investment</label>
                <input type="number" 
                required
                value={UserInput.annualInvestment}
                onChange={
                    (event) =>{
                        onChange('annualInvestment',event.target.value)
                    }
                }
                />
            </p>
        </div>

        <div className="input-group">
            <p>
                <label htmlFor="">Expected Return</label>
                <input type="number" 
                required 
                value={UserInput.expectedReturn}
                onChange={
                    (event) =>{
                        onChange('expectedReturn',event.target.value)
                    }
                }
                />
            </p>
            <p>
                <label htmlFor="">Duration of Investment</label>
                <input type="number" 
                required
                value={UserInput.duration}
                onChange={
                    (event) => {
                        onChange('duration',event.target.value);
                    }
                }
                />
            </p>
        </div>
    </section>
}