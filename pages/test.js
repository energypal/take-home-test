const SignupForm = ({ title }) => {
    // prevent submitting invalid or empty emails
    const { register, errors, handleSubmit } = useForm();
    // handle form submit
    const onSubmit = (data) => console.log({ data });

return (
        <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
            <div className={formClass}>
                <input
                    className={inputClass}
                    type="text"
                    name="email"
                    ref={register({
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    })}
                    placeholder="Jane Doe"
                    aria-label="Full name"
                    disabled={isLoading}
                />
                <button type="submit">...<button>
          </div>
        </form>

    );
  };