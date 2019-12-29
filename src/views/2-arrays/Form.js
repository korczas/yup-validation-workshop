import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { TextField, Button, Card, CardContent } from "@material-ui/core";
import { get } from "lodash";

export default function Form2() {
  return (
    <div>
      <Formik
        initialValues={{
          userName: "",
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        render={({ values }) => (
          <Form>
            <div className="fields-wrapper">
              <Field component={FormikTextField} name="userName" label="Your name" />
            </div>

            <Card>
              <CardContent>
                <FieldArray
                  name="friends"
                  render={(arrayHelpers) => (
                    <div>
                      <h3>Friends List</h3>
                      {values.friends &&
                        values.friends.length > 0 &&
                        values.friends.map((friend, index) => (
                          <div key={index}>
                            <Field name={`friends[${index}].name`} component={FormikTextField} label="Name" />
                            <Field
                              name={`friends[${index}].age`}
                              component={FormikTextField}
                              label="Age"
                              type="number"
                            />
                            <Button type="button" variant="outlined" onClick={() => arrayHelpers.remove(index)}>
                              -
                            </Button>
                          </div>
                        ))}
                      <div>
                        <Button
                          type="button"
                          onClick={() => arrayHelpers.push({ name: "", age: "" })}
                          variant="outlined"
                          color="primary"
                        >
                          Add a friend
                        </Button>
                      </div>
                    </div>
                  )}
                />
              </CardContent>
            </Card>

            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      />
    </div>
  );
}

function FormikTextField(props) {
  const { field, form, ...restProps } = props;
  const error = get(form.touched, field.name) && get(form.errors, field.name);

  return <TextField m={11} {...restProps} {...field} error={!!error} helperText={error} id={field.name} />;
}
