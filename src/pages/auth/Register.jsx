import { useFormik } from "formik";
import { registerValidationSchema } from "@/validation/auth/Register";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUsers, createUsers } from "@/services/authServices";

const Register = () => {
  //---------- All hooks use here -----------
  const navigate = useNavigate();

  // ------------ Tenstack query - use here -----------------
  const { data: users, isLoading: isUsersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const { mutate: createUsersMutate, isPending: isUsersCreateLoading } =
    useMutation({
      mutationFn: (data) => createUsers(data),
      onSuccess: (data) => {
        console.log(data);
        alert("User created successfully");
      },
    });

  //----------Handle form here with Formik-----------
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        full_name: "",
        email: "",
        phone: "",
        password: "",
      },
      validationSchema: registerValidationSchema,
      onSubmit: async (values) => {
        const isUserExists = users.find((items) => items.email === values.email);
        if(isUserExists){
          alert("Email already exists, please login");
          return
        }
        createUsersMutate(values);
      },
    });

  if (isUsersLoading) {
    return <p>loading....</p>;
  }

  console.log(users);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-2xl">Todo Application</h1>
            <span className="text-gray-300">Enter SignUp Details</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex justify-center  text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-600 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-600 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="full_name"
                value={values.full_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Full name"
              />
              {errors.full_name && touched.full_name && (
                <p>{errors.full_name}</p>
              )}
            </div>

            <div className="mb-4 flex justify-center text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-600 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-600 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="id@email.com"
              />
              {errors.email && touched.email && <p>{errors.email}</p>}
            </div>

            <div className="mb-4 flex justify-center text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-600 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-600 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="9998877744"
              />
              {errors.phone && touched.phone && <p>{errors.phone}</p>}
            </div>

            <div className="mb-4 flex justify-center text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-600 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-600 shadow-lg outline-none backdrop-blur-md"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="*********"
              />
              {errors.password && touched.password && <p>{errors.password}</p>}
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                disabled={isUsersCreateLoading}
                type="submit"
                className="rounded-3xl bg-yellow-600 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-800"
              >
                {isUsersCreateLoading ? "Loading......" : "SignUp"}
              </button>
            </div>
            <span className="mt-4 block text-center">
              if you already have an account then{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate("/")}
              >
                login
              </span>{" "}
              first
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
