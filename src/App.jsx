import { useState } from "react";

import InputField from "./form-field/input";



function App() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: ''
      
    });


    const formFields = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            placeholder: "First Name",
            label: "First Name",
            errorMessage: "First Name should be 3-16 characters and shouldn't include any special character!",
            required: true,
            pattern: "^[A-Za-z]{3,16}$",
            autocomplete: "off",
          },
          {
            id: 2,
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
            label: "Last Name",
            errorMessage: "Last Name should be 3-16 characters and shouldn't include any special character!",
            required: true,
            pattern: "^[A-Za-z]{3,16}$",
            autocomplete: "off",
          },          
        {
            id: 3,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$",
            autocomplete: "off",
        },
        {
            id: 4,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            errorMessage: "It should be valid email address!",
            required: true,
            autocomplete: "off",
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            required: true,
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            autocomplete: "off",
        },
        {
            id: 6,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            errorMessage: "Password don't match!",
            required: true,
            pattern: values.password,
            autocomplete: "off",
        },
        {
            id: 7,
            name: "phoneNo",
            type: "tel",
            placeholder: "Phone Number",
            label: "Phone Number",
            errorMessage: "Please enter a valid phone number!",
            required: true,
            pattern: "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$",
            autocomplete: "off",
          },
          {
            id: 8,
            name: "country",
            type: "text",
            placeholder: "Country",
            label: "Country",
            errorMessage: "Please select your country!",
            required: true,
            autocomplete: "off",
          },
          {
            id: 9,
            name: "city",
            type: "text",
            placeholder: "City",
            label: "City",
            errorMessage: "Please select your city!",
            required: true,
            autocomplete: "off",
          },
          {
            id: 10,
            name: "panNo",
            type: "text",
            placeholder: "PAN Number",
            label: "PAN Number",
            errorMessage: "Please enter a valid PAN number!",
            required: true,
            pattern: "^[A-Z]{5}[0-9]{4}[A-Z]{1}$",
            autocomplete: "off",
          },
          {
            id: 11,
            name: "aadharNo",
            type: "text",
            placeholder: "Aadhar Number",
            label: "Aadhar Number",
            errorMessage: "Please enter a valid Aadhar number!",
            required: true,
            pattern: "^[0-9]{12}$",
            autocomplete: "off",
          },
          
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
                <InputField
                    key={field.id}
                    {...field}
                    value={values[field.name]}
                    onChange={onChange}
                />
            ))}
            <button class="button" role="button">
                Submit
            </button>
        </form>
    );
}

export default App;