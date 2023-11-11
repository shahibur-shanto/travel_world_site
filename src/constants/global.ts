export const genderOptions = [
	{
		label: "Male",
		value: "male",
	},
	{
		label: "Female",
		value: "female",
	},
	{
		label: "Others",
		value: "others",
	},
];
export const categoryOptions = [
	{
		label: "HILL",
		value: "HILL",
	},
	{
		label: "SEA",
		value: "SEA",
	},
	{
		label: "FOREST",
		value: "FOREST",
	},
	{
		label: "CITY",
		value: "CITY",
	},
];

export const transportOptions = [
	{
		label: "BUS",
		value: "BUS",
	},
	{
		label: "TRAIN",
		value: "TRAIN",
	},
	{
		label: "AIR",
		value: "AIR",
	},
	{
		label: "CAR",
		value: "CAR",
	},
	{
		label: "BOAT",
		value: "BOAT",
	},
];

export const countryOptions = [
	{
		label: "Indonesia",
		value: "Indonesia",
	},
	{
		label: "Thailand",
		value: "Thailand",
	},
	{
		label: "India",
		value: "India",
	},
	{
		label: "Nepal",
		value: "Nepal",
	},
];
export const acDepartmentOptions = [
	{
		label: "CSE",
		value: "cse",
	},
	{
		label: "Software Engineering",
		value: "software engineering",
	},
];
export const acSemesterOptions = [
	{
		label: "Fall 2023",
		value: "fall23",
	},
	{
		label: "Autumn 2023",
		value: "autumn2023",
	},
	{
		label: "Summer 2023",
		value: "summer23",
	},
];

export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
export const monthOptions = months.map((month: string) => {
	return {
		label: month,
		value: month,
	};
});

export const days = [
	"SATURDAY",
	"SUNDAY",
	"MONDAY",
	"TUESDAY",
	"WEDNESDAY",
	"THURSDAY",
	"FRIDAY",
];
export const daysOptions = days.map((day: string) => {
	return {
		label: day,
		value: day,
	};
});

export const semesterRegistrationStatus = ["UPCOMING", "ONGOING", "ENDED"];

export enum ExamType {
	FINAL = "FINAL",
	MIDTERM = "MIDTERM",
}
