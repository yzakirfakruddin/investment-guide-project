export default function UserInput({ initialUserInput, selectHandleChange }) {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={initialUserInput.initialInvestment}
            onChange={(event) =>
              selectHandleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={initialUserInput.annualInvestment}
            onChange={(event) =>
              selectHandleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={initialUserInput.expectedReturn}
            onChange={(event) =>
              selectHandleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={initialUserInput.duration}
            onChange={(event) =>
              selectHandleChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}