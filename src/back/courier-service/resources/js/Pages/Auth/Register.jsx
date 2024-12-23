import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
<<<<<<< HEAD
        name: "",
        email: "",
        surname: "",
        patronymic: "",
        phone_number: "",
        password: "",
        password_confirmation: "",
=======
        name: '',
        surname: '',
        patronymic: '',
        phone_number: '',
        email: '',
        password: '',
        // password_confirmation: '',
>>>>>>> 5860e311f20528f12c12ef95e7c2a389588b9af8
    });

    const submit = async (e) => {
        e.preventDefault();
<<<<<<< HEAD

        try {
            const response = await fetch("http://localhost:3000/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Ошибка:", errorData);
            } else {
                const result = await response.json();
                console.log("Успешная регистрация:", result);
            }
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
        }
=======
    
        // Отправка данных на бэкенд NestJS
        fetch('http://localhost:3000/users/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((result) => {
            console.log('Успех:', result);
        })
        .catch((error) => {
            console.error('Ошибка:', error.message);
            reset('password');
        });
>>>>>>> 5860e311f20528f12c12ef95e7c2a389588b9af8
    };
    

    return (
        <GuestLayout>
        <Head title="Register" />

        <form onSubmit={submit}>
        <div>
                <InputLabel htmlFor="name" value="Имя" />

                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />

                <InputError message={errors.name} className="mt-2" />
            </div>

<<<<<<< HEAD
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Имя" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="email" value="почта" />

                    <TextInput
                        id="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
=======
            <div>
                <InputLabel htmlFor="email" value="email" />

                <TextInput
                    id="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="email"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                    required
                />

                <InputError message={errors.email} className="mt-2" />
            </div>
>>>>>>> 5860e311f20528f12c12ef95e7c2a389588b9af8

            <div className="mt-4">
                <InputLabel htmlFor="surname" value="Фамилия" />

<<<<<<< HEAD
                    <TextInput
                        id="surname"
                        name="surname"
                        value={data.surname}
                        className="mt-1 block w-full"
                        autoComplete="surname"
                        isFocused={true}
                        onChange={(e) => setData("surname", e.target.value)}
                        required
                    />
=======
                <TextInput
                    id="surname"
                    name="surname"
                    value={data.surname}
                    className="mt-1 block w-full"
                    autoComplete="family-name"
                    onChange={(e) => setData('surname', e.target.value)}
                    required
                />
>>>>>>> 5860e311f20528f12c12ef95e7c2a389588b9af8

                <InputError message={errors.surname} className="mt-2" />
            </div>

<<<<<<< HEAD
                <div className="mt-4">
                    <InputLabel
                        htmlFor="patronymic"
                        value="Отчество (При наличии)"
                    />

                    <TextInput
                        id="patronymic"
                        name="patronymic"
                        value={data.patronymic}
                        className="mt-1 block w-full"
                        autoComplete="patronymic"
                        isFocused={true}
                        onChange={(e) => setData("patronymic", e.target.value)}
                        required
                    />
=======
            <div className="mt-4">
                <InputLabel htmlFor="patronymic" value="Отчество (при наличии)" />

                <TextInput
                    id="patronymic"
                    name="patronymic"
                    value={data.patronymic}
                    className="mt-1 block w-full"
                    autoComplete="additional-name"
                    onChange={(e) => setData('patronymic', e.target.value)}
                />
>>>>>>> 5860e311f20528f12c12ef95e7c2a389588b9af8

                <InputError message={errors.patronymic} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="phone_number" value="Номер телефона" />

<<<<<<< HEAD
                    <TextInput
                        id="phone_number"
                        type="number"
                        name="phoneNumber"
                        value={data.phone_number}
                        className="mt-1 block w-full"
                        autoComplete="phoneNumber"
                        onChange={(e) => setData("phoneNumber", e.target.value)}
                        required
                    />
=======
                <TextInput
                    id="phone_number"
                    type="tel"
                    name="phone_number"
                    value={data.phone_number}
                    className="mt-1 block w-full"
                    autoComplete="tel"
                    onChange={(e) => setData('phone_number', e.target.value)}
                    required
                />
>>>>>>> 5860e311f20528f12c12ef95e7c2a389588b9af8

                <InputError message={errors.phone_number} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password" value="Пароль" />

<<<<<<< HEAD
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
=======
                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) => setData('password', e.target.value)}
                    required
                />
>>>>>>> 5860e311f20528f12c12ef95e7c2a389588b9af8

                <InputError message={errors.password} className="mt-2" />
            </div>

            {/* <div className="mt-4">
                <InputLabel
                    htmlFor="password_confirmation"
                    value="Подтвердите пароль"
                />

<<<<<<< HEAD
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />
=======
                <TextInput
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) =>
                        setData('password_confirmation', e.target.value)
                    }
                    required
                />
>>>>>>> 5860e311f20528f12c12ef95e7c2a389588b9af8

                <InputError
                    message={errors.password_confirmation}
                    className="mt-2"
                />
            </div> */}

<<<<<<< HEAD
                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route("login")}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>
=======
            <div className="mt-4 flex items-center justify-end">
                <Link
                    href={route('login')}
                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Уже зарегистрированы?
                </Link>
>>>>>>> 5860e311f20528f12c12ef95e7c2a389588b9af8

                <PrimaryButton className="ms-4" disabled={processing}>
                    Зарегистрироваться
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
    );
}
