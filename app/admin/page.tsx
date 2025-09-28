import StickyContactIcons from "../stickyicons/stickyIcons";

export default function AdminIndex() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">👨‍💻 Admin Panel</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Welcome to the Akshya Solutions Admin Area. Please log in to manage
        contact messages, view customer queries, and update records.
      </p>
      <a
        href="/admin/login"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go to Login
      </a>
          <StickyContactIcons/>
    </div>

  );
}
