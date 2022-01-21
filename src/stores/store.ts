import { defineStore } from "pinia";
// import { userData } from "../data.json"
// import {ChatModels, UserOrCurrentUser, } from "../models";

export const useUser = defineStore({
	id: "user",

	state: () => ({
		likes: 0,
		showUserPhoto: true,
		nameOfUser: "juliusom",
		currentUser: "juliosomo",
		imgUrl: "/images/avatars/image-amyrobson.png",
	}),
	getters: {
		checkUser: (state) => {
			if (state.currentUser === state.nameOfUser) return true;
		},
	},
	actions: {
		increment() {
			this.likes++;
		},
		decrease() {
			this.likes--;
		},
	},
});
