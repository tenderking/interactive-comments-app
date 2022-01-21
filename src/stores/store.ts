import { defineStore } from "pinia";
import { userData } from "../data.json"
import {ChatModels, UserOrCurrentUser, } from "../models";

export const useUser = defineStore( {
    
    state: () => {
        likeCounter:0,
}

})