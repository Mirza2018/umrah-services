"use client";

import { AllImages } from "../../../public/images/AllImages";

export default function ServiceCard({
  name = "Shihab Ahmed",
  serviceType = "Umrah",
  email = "Santo@wer.com",
  city = "New York",
  profileImage = AllImages.omravendor,
  onConfirm,
  onReject,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-80 hover:shadow-md transition-shadow">
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={profileImage || "/placeholder.svg"}
          alt={`${name} profile`}
          className="w-15 h-15 rounded-full object-cover"
        />
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      </div>

      {/* Service Details */}
      <div className="space-y-3 mb-6">
        <div className="text-sm text-gray-600">
          <span className="font-medium">Service type :</span> {serviceType}
        </div>
        <div className="text-sm text-gray-600">
          <span className="font-medium">Email :</span> {email}
        </div>
        <div className="text-sm text-gray-600">
          <span className="font-medium">City :</span> {city}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onConfirm}
          className="flex-1 bg-secondary-color  text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          Confirm
        </button>
        <button
          onClick={onReject}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors border  border-[#0d1b2a2e]"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
