import Experience from "./components/Experience"
import { User } from "./types/types"

const IdCard = (student: User) => {
    return <Experience {...student} />
}

export default IdCard