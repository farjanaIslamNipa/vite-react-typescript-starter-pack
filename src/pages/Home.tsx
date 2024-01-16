import {createContext, useEffect, useState} from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Container from "../components/ui/Container";
import {Form, FormSection, FormSubmit, Input} from "../components/ReusableForm";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";

export const FormElementContext = createContext<{double: boolean} | null>(null)

const Home = () => {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal(prev => !prev)
  }

  // Form section
  const { handleSubmit, register, formState: {errors} } = useForm<TTest>()
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }
 
  const double = true

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email()
  })

  type TTest = z.infer<typeof TestSchema>
  return (
    <Container>
      <Button onClick={() =>setModal(prev => !prev)}>Open Modal</Button>
      <Modal isOpen={modal} onClose={handleModalClose}>
        <h1 >This is modal</h1>
        <Modal.Header>
          <h2>This is modal header</h2>
        <Modal.CloseButton />
        </Modal.Header>

      </Modal>

      <div className="mt-5">
        <FormElementContext.Provider value={{double}}>
          <Form double={true} onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
            <FormSection>
              <Input label="Name" type={'text'} register={register('name')} errors={errors} />
              <Input label="Email" type={'email'} register={register('email')} errors={errors} />
            </FormSection>
            <FormSubmit></FormSubmit>
          </Form>
        </FormElementContext.Provider>
      </div>
    </Container>
  );
};

export default Home;