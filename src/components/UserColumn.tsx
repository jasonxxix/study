import React from 'react'
import { User } from '../App';
import _ from 'lodash'
interface props {
    currentUser: User
}

export function UserColumn({ currentUser }: props) {
    console.log('UserColumn render', currentUser);
    return <div className="p-2 bg-teal-500">
        {currentUser.name}
    </div>
}

export default React.memo(UserColumn, _.isEqual);
// export default React.memo(UserColumn); // Shallow Comparision
// export default UserColumn;