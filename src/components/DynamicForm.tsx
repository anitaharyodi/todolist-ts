import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";

const dynamicSchema = yup.object({
  data: yup
    .array()
    .of(
      yup.object().shape({
        text: yup.string().required(),
      })
    )
    .min(1),
});

function DynamicForm() {
  const { control, register, handleSubmit } = useForm({
    resolver: yupResolver(dynamicSchema),
    defaultValues: {
      data: [
        {
          text: "",
        },
      ],
    },
  });
  const { fields, append } = useFieldArray({ control, name: "data" });

  const onSubmit = (data: any) => console.log({ data });

  return (
    <section className="dynamic_form mb-10">
      <div className="space-y-3">
        {fields.map((field, index) => (
          <div key={field.id}>
            <input {...register(`data.${index}.text`)} className="text-black" />
          </div>
        ))}
      </div>

      <button
        className="bg-blue-500 text-white px-5 py-1 mt-3 mr-6"
        type="button"
        onClick={() => {
          append({ text: "" });
        }}
      >
        Tambah
      </button>
      <button
        className="bg-blue-500 text-white px-5 py-1 mt-3"
        type="button"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </button>
    </section>
  );
}

export default DynamicForm;
