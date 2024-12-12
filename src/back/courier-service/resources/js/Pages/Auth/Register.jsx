import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        surname: '',
        patronymic: '',
        phone_number: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
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

            <div className="mt-4">
                <InputLabel htmlFor="surname" value="Фамилия" />

                <TextInput
                    id="surname"
                    name="surname"
                    value={data.surname}
                    className="mt-1 block w-full"
                    autoComplete="family-name"
                    onChange={(e) => setData('surname', e.target.value)}
                    required
                />

                <InputError message={errors.surname} className="mt-2" />
            </div>

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

                <InputError message={errors.patronymic} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="phone_number" value="Номер телефона" />

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

                <InputError message={errors.phone_number} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password" value="Пароль" />

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

                <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel
                    htmlFor="password_confirmation"
                    value="Подтвердите пароль"
                />

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

                <InputError
                    message={errors.password_confirmation}
                    className="mt-2"
                />
            </div>

            <div className="mt-4 flex items-center justify-end">
                <Link
                    href={route('login')}
                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Уже зарегистрированы?
                </Link>

                <PrimaryButton className="ms-4" disabled={processing}>
                    Зарегистрироваться
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
    );
}
