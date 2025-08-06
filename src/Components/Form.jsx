import { toast } from "react-toastify";
const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const dob = e.target.dob.value;

        console.log(firstName, lastName, email, password, confirmPassword, dob);
        

        if (confirmPassword !== password) {
            toast.error("Password doesn't match");
            return;
        }


        if (password.length < 8) {
            toast.error("Password should be at least 8 characters");
            return;
        }

        const dateOfbirth = new Date(dob).getFullYear();
        const today = new Date().getFullYear();
        const age = today - dateOfbirth;

        if (age < 18) {
            toast.error("You must be 18 or older to register");
            return;
        }
        toast.success("Registration successful");

    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: 400,
                margin: "2rem auto",
                padding: 24,
                border: "1px solid #ddd",
                borderRadius: 12,
                background: "#fafafa",
            }}
        >
            <h2 style={{ textAlign: "center" }}>Registration Form</h2>
            <div style={{ marginBottom: 12 }}>
                <label>
                    First Name
                    <br />
                    <input
                        type="text"
                        name="firstName"
                        required
                        style={{ width: "100%" }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: 12 }}>
                <label>
                    Last Name
                    <br />
                    <input
                        type="text"
                        name="lastName"
                        required
                        style={{ width: "100%" }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: 12 }}>
                <label>
                    Email
                    <br />
                    <input type="email" name="email" required style={{ width: "100%" }} />
                </label>
            </div>
            <div style={{ marginBottom: 12 }}>
                <label>
                    Address
                    <br />
                    <input
                        type="text"
                        name="address"
                        required
                        style={{ width: "100%" }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: 12 }}>
                <label>
                    Date of Birth
                    <br />
                    <input type="date" name="dob" required style={{ width: "100%" }} />
                </label>
            </div>
            <div style={{ marginBottom: 12 }}>
                <label>
                    Password
                    <br />
                    <input
                        type="password"
                        name="password"
                        required
                        style={{ width: "100%" }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: 16 }}>
                <label>
                    Conform Password
                    <br />
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        style={{ width: "100%" }}
                    />
                </label>
            </div>
            <button
                type="submit"
                style={{ width: "100%", padding: 10, fontWeight: "bold" }}
            >
                Submit
            </button>
        </form>
    );
};

export default Form;
