import { useRecoilValue } from "recoil"
import { userIds, usersAtom } from "./users.atom"


export const useUserIds = () => {
    const users = useRecoilValue(userIds)

    return users
}

export const useUsers = () => {
    const users = useRecoilValue(usersAtom)

    return users
}