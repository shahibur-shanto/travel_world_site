export enum tagTypes {
	user = "user",
	destination = "destination",
	
}

export type TagType = tagTypes.user | tagTypes.destination;

// const tagTypeToProperty: Record<tagTypes, string> = {
// 	[tagTypes.user]: "user",
// 	[tagTypes.destination]: "destination",
//   };

export const tagTypesList = [tagTypes.user, tagTypes.destination];
