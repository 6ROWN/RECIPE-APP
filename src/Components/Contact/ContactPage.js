import React from "react";
import { Container } from "../Context/GlobalStyless";
import { IoPerson } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import {
	Wrapper,
	Error,
	Input,
	FormGroup,
	FormWrapper,
	FormControl,
	Button,
} from "./ContactPageStyles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
	firstname: "",
	lastname: "",
	email: "",
	contact: "",
	message: "",
};

const onSubmit = (value, onSubmitProps) => {
	//console.log(value);
	onSubmitProps.resetForm();
};

const rePhoneNumber =
	/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const validationSchema = Yup.object({
	firstname: Yup.string().required("Required"),
	lastname: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	contact: Yup.string()
		.matches(rePhoneNumber, "Not a valid number")
		.required("Required")
		.min(10, "too short")
		.max(10, "too long"),
	message: Yup.string().required("Required"),
});

const ContactPage = () => {
	return (
		<Container>
			<Wrapper>
				<div>
					<h2>We've been waiting for you</h2>
					<p>Send us a message. We want to know how we can help</p>
				</div>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					<Form>
						<FormWrapper>
							<FormGroup>
								<label
									htmlFor="firstname"
									style={{
										color: "red",
										fontSize: "14px",
										fontWeight: "600",
									}}
								>
									Firstname
								</label>

								<Field name="firstname">
									{({ field }) => {
										return (
											<div>
												<IoPerson
													style={{
														position: "absolute",
														margin: "20px",
														fontSize: "18px",
													}}
												/>
												<Input
													id="firstname"
													type="text"
													name="firstname"
													placeholder="firstname"
													{...field}
												/>
											</div>
										);
									}}
								</Field>
								<ErrorMessage name="firstname">
									{(msg) => <Error>{msg}</Error>}
								</ErrorMessage>
							</FormGroup>
							<FormGroup>
								<label
									htmlFor="lastname"
									style={{
										color: "red",
										fontSize: "14px",
										fontWeight: "600",
									}}
								>
									Lastname
								</label>

								<Field name="lastname">
									{({ field }) => {
										return (
											<div>
												<IoPerson
													style={{
														position: "absolute",
														margin: "20px",
														fontSize: "18px",
													}}
												/>
												<Input
													id="lastname"
													type="text"
													name="lastname"
													placeholder="Lastname"
													{...field}
												/>
											</div>
										);
									}}
								</Field>
								<ErrorMessage name="lastname">
									{(msg) => <Error>{msg}</Error>}
								</ErrorMessage>
							</FormGroup>
							<FormGroup>
								<label
									htmlFor="email"
									style={{
										color: "red",
										fontSize: "14px",
										fontWeight: "600",
									}}
								>
									Email
								</label>

								<Field name="email">
									{({ field }) => {
										return (
											<div>
												<MdEmail
													style={{
														position: "absolute",
														margin: "20px",
														fontSize: "20px",
													}}
												/>
												<Input
													id="email"
													type="text"
													name="email"
													placeholder="Email"
													{...field}
												/>
											</div>
										);
									}}
								</Field>
								<ErrorMessage name="email">
									{(msg) => <Error>{msg}</Error>}
								</ErrorMessage>
							</FormGroup>
							<FormGroup>
								<label
									htmlFor="contact"
									style={{
										color: "red",
										fontSize: "14px",
										fontWeight: "600",
									}}
								>
									Mobile Number
								</label>

								<Field name="contact">
									{({ field }) => {
										return (
											<div>
												<MdPhone
													style={{
														position: "absolute",
														margin: "20px",
														fontSize: "20px",
													}}
												/>
												<Input
													id="contact"
													type="text"
													name="contact"
													placeholder="Phone Number"
													{...field}
												/>
											</div>
										);
									}}
								</Field>
								<ErrorMessage name="contact">
									{(msg) => <Error>{msg}</Error>}
								</ErrorMessage>
							</FormGroup>
							<FormGroup>
								<label
									htmlFor="message"
									style={{
										color: "red",
										fontSize: "14px",
										fontWeight: "600",
									}}
								>
									Message
								</label>

								<Field name="message">
									{({ field }) => {
										return (
											<FormControl>
												<Input
													as="textarea"
													id="message"
													type="text"
													name="message"
													cols="30"
													rows="10"
													maxLength="300px"
													placeholder="Tell us how we can help you..."
													{...field}
													style={{
														maxWidth: "600px",
													}}
												/>
											</FormControl>
										);
									}}
								</Field>
								<ErrorMessage name="message">
									{(msg) => <Error>{msg}</Error>}
								</ErrorMessage>
							</FormGroup>
						</FormWrapper>
						<Button type="submit">
							<span>SUBMIT</span>
						</Button>
					</Form>
				</Formik>
			</Wrapper>
		</Container>
	);
};

export default ContactPage;
