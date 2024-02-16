import UpdateConfigurationForm from '@/app/configuration/UpdateConfigurationForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <UpdateConfigurationForm />
    </main>
  );
}
