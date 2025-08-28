import ServiceCard from "./ServiceCard";


export default function VendorServiceRequest() {
  const handleConfirm = (name) => {
    console.log(`Confirmed service for ${name}`);
  };

  const handleReject = (name) => {
    console.log(`Rejected service for ${name}`);
  };

  const serviceRequests = [
    {
      name: "Shihab Ahmed",
      serviceType: "Umrah",
      email: "Santo@wer.com",
      city: "New York",
    },
    {
      name: "Shihab Ahmed",
      serviceType: "Umrah badal",
      email: "Santo@wer.com",
      city: "New York",
    },
    {
      name: "Shihab Ahmed",
      serviceType: "Umrah",
      email: "Santo@wer.com",
      city: "New York",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl">


        <div className="flex flex-wrap gap-6">
          {serviceRequests.map((request, index) => (
            <ServiceCard
              key={index}
              name={request.name}
              serviceType={request.serviceType}
              email={request.email}
              city={request.city}
              onConfirm={() => handleConfirm(request.name)}
              onReject={() => handleReject(request.name)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
