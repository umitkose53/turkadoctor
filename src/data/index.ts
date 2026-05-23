export * from "./types";
export * from "./cities";
export * from "./specialties";
export * from "./procedures";
export * from "./clinics";
export * from "./doctors";

import { clinics } from "./clinics";
import type { ClinicSummary } from "./types";

export function clinicsByCity(citySlug: string): ClinicSummary[] {
  return clinics.filter((c) => c.citySlug === citySlug);
}

export function clinicsBySpecialty(specialtySlug: string): ClinicSummary[] {
  return clinics.filter((c) => c.specialties.includes(specialtySlug));
}

export function clinicsByCityAndSpecialty(
  citySlug: string,
  specialtySlug: string,
): ClinicSummary[] {
  return clinics.filter(
    (c) =>
      c.citySlug === citySlug && c.specialties.includes(specialtySlug),
  );
}

export function clinicsByCityAndProcedure(
  citySlug: string,
  procedureSlug: string,
): ClinicSummary[] {
  return clinics.filter(
    (c) =>
      c.citySlug === citySlug && c.procedures.includes(procedureSlug),
  );
}

export function clinicsByProcedure(procedureSlug: string): ClinicSummary[] {
  return clinics.filter((c) => c.procedures.includes(procedureSlug));
}
