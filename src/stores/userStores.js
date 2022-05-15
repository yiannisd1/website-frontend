import { makeAutoObservable, runInAction } from "mobx"
import agent from "../proxy/userService";


export default class UserStore {
    UserData;
    loading = false;
    loadingInitial = false;
    constructor() {
        makeAutoObservable(this)
    }


    loadUser = async (body) => {
            this.loadingInitial = true;
            try {
                const userDetail = await agent.UserAPI.details(body);
                runInAction(() => {
                    this.UserData = userDetail;
                })

                this.setLoadingInitial(false);
            } catch (error) {
                console.log(error);
            
        }
    }


}