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

  


    // createActivity = async (activity: Activity) => {
    //     this.loading = true;
    //     try {
    //         await agent.Activities.create(activity);
    //         runInAction(() => {
    //             this.activityRegistry.set(activity.id, activity);
    //             this.selectedActivity = activity;
    //             this.editMode = false;
    //             this.loading = false;
    //         })
    //     } catch (error) {
    //         console.log(error);
    //         runInAction(() => {
    //             this.loading = false;
    //         })
    //     }
    // }

    // updateActivity = async (activity: Activity) => {
    //     this.loading = true;
    //     try {
    //         await agent.Activities.update(activity);
    //         runInAction(() => {
    //             this.activityRegistry.set(activity.id, activity);
    //             this.selectedActivity = activity;
    //             this.editMode = false;
    //             this.loading = false;

    //         })
    //     } catch (error) {
    //         console.log(error);
    //         runInAction(() => {
    //             this.loading = false;
    //         })
    //     }
    // }

    // deleteActivity = async (id: string) => {
    //     this.loading = true;
    //     try {
    //         await agent.Activities.delete(id);
    //         runInAction(() => {
    //             this.activityRegistry.delete(id);
    //             this.loading = false;
    //         })
    //     } catch (error) {
    //         console.log(error);
    //         runInAction(() => {
    //             this.loading = false;
    //         })

    //     }
    // }

}