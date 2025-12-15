
const Contact = () => {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
      <p className="text-xl mb-10">Have questions? We're here to help!</p>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="card bg-base-200 p-8">
          <h3 className="text-2xl font-bold">Email</h3>
          <p className="text-lg">support@etuitionbd.com</p>
        </div>
        <div className="card bg-base-200 p-8">
          <h3 className="text-2xl font-bold">Phone</h3>
          <p className="text-lg">+880 1234-567890</p>
        </div>
        <div className="card bg-base-200 p-8">
          <h3 className="text-2xl font-bold">Address</h3>
          <p className="text-lg">Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;