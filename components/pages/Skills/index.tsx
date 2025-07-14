"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { stacks } from "@/data/stacks";
import Header from "@/components/ui/Header";
import { api, BASE_URL_IMAGE } from "@/lib/api";
import Loading from "@/components/ui/Loading";
import { Certificate } from "@/types/types";

function Skills() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCertificates() {
      try {
        const { data } = await api.get<Certificate[]>("/certificate");
        setCertificates(data);
      } catch (err: any) {
        setError(err.message ?? "Gagal memuat data");
      } finally {
        setLoading(false);
      }
    }

    loadCertificates();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Certificates Section */}
      <section className="relative z-10 py-2">
        <div className="container mx-auto px-6">
          {/* Premium Header */}
          <Header
            tag="Achivments"
            title="Certficated"
            subtitle="Excelence"
            description="Professional certifications that validate my expertise"
            gradient="
          bg-gradient-to-r from-yellow-400 to-orange-500
            
            "
          />

          {/* Premium Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((item, index) => (
              <div key={item.id} className="group relative">
                {/* Certificate Card */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-yellow-500/25">
                  {/* Gradient Border Animation */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/50 via-orange-500/50 to-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border-b border-white/20">
                    <Image
                      src={`${BASE_URL_IMAGE}${item?.image}`}
                      alt={`Certificate ${item.id}`}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 filter drop-shadow-xl"
                    />

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  {/* Floating Orbs */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 delay-100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Skills;
