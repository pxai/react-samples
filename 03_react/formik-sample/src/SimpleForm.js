import React from 'react';
import { Formik, Field, Form } from 'formik';

class SimpleForm extends React.Component {
	render () {
		return <div>
			<h1>Login</h1>
			<Formik
				initialValues={{login: '', pasword: ''}}
				onSubmit={values => {
					alert ("Values: " + JSON.stringify (values));
				}}
				render={() => (
					<Form>
						<div>
							<label htmlFor="login">Login</label>
							<Field name="login" placeholder="login here..."/>
							<div>
							</div>
							<label htmlFor="password">Password</label>
							<Field name="password" type="password" placeholder="Password"/>
						</div>
						<div>
							<button type="submit">Sign In</button>
						</div>
					</Form>
				)}
			/>
		</div>;
	}
}

export default SimpleForm;