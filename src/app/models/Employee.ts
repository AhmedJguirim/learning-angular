export interface Employee {
  // Core Identity
  id: string; // Unique identifier (UUID recommended)
  employeeNumber: string; // Human-readable employee number
  
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  
  // Organizational Information
  department: string;
  jobTitle: string;
  managerId?: string; // References another employee
  
  // Employment Status
  status: EmployeeStatus;
  hireDate: string; // ISO 8601 date format
  terminationDate?: string; // ISO 8601 date format
  
  // Access Control (for future security integration)
  accessLevel: AccessLevel;
  accessGroups: string[]; // E.g., ["engineering", "building-a", "datacenter"]
  badgeId?: string; // Physical badge/card identifier
  
  // Audit Trail
  createdAt: string; // ISO 8601 timestamp
  updatedAt: string; // ISO 8601 timestamp
  createdBy: string; // User ID who created the record
  updatedBy: string; // User ID who last updated
}

export enum EmployeeStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  ON_LEAVE = "on_leave",
  TERMINATED = "terminated",
  SUSPENDED = "suspended"
}

export enum AccessLevel {
  BASIC = "basic",           // Common areas only
  STANDARD = "standard",     // Department-specific areas
  ELEVATED = "elevated",     // Multiple departments + restricted areas
  ADMINISTRATOR = "administrator" // All areas
}