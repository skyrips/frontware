import api from "$lib/utils/api";

export interface UserData {
  _id: string;
  first_name: string;
  last_name: string;
  gender: string;
  is_deleted: boolean;
  createdAt: string;
  updatedAt: string;
  email: string;
}

export interface addUserResponse {
  status: string;
  data: UserData;
  message: string;
}

export interface AddUserRequest {
  first_name: string;
  last_name: string;
  email: string;
}

export const addUser = async (
  userData: AddUserRequest
): Promise<addUserResponse> => {
  try {
    const response = await api.post<addUserResponse>(`/user/add`, userData);
    return response.data;
  } catch (error) {
    console.error("Failed to add user:", error);
    throw error;
  }
};
