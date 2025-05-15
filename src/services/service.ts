import axiosInstance from "@/axios";
import {
  TAdvertisement,
  TCourse,
  TTag,
  TTeacher,
  DTOAPIResponseSuccess,
} from "@/lib/types";

const BASE_URL = "v1/website";

export const getAllCourses = async (): Promise<
  DTOAPIResponseSuccess<TCourse[]>
> => await axiosInstance.get(`${BASE_URL}/courses`);

export const getAllTeachers = async (): Promise<
  DTOAPIResponseSuccess<TTeacher[]>
> => await axiosInstance.get(`${BASE_URL}/teachers`);

export const getAllAdvertisements = async (): Promise<
  DTOAPIResponseSuccess<TAdvertisement[]>
> => await axiosInstance.get(`${BASE_URL}/advertisements`);

export const getAllTags = async (): Promise<DTOAPIResponseSuccess<TTag[]>> =>
  await axiosInstance.get(`${BASE_URL}/tags`);
