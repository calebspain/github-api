import { Repo } from "./Repo";

export class User {
    login!: string;
    fullName!: string;
    repoCount!: number;
    followerCount!: Number;
    repos?: Repo[];

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        // this.login = userResponse.login;
    }
}