import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/components/icons/user";

const data = [
  {
    _id: 1,
    name: "Nathali Craig",
    imgSrc: "/images/users/sample-1.png",
  },
  {
    _id: 2,
    name: "Drew Cano",
    imgSrc: "/images/users/sample-2.png",
  },
  {
    _id: 3,
    name: "Orlando Diggs",
    imgSrc: "/images/users/sample-3.png",
  },
  {
    _id: 4,
    name: "Andi Lane",
    imgSrc: "/images/users/sample-4.png",
  },
  {
    _id: 5,
    name: "Kate Morrison",
    imgSrc: "/images/users/sample-5.png",
  },
    {
    _id: 6,
    name: "Kuray Okumus",
    imgSrc: "/images/users/sample-5.png",
  },
];

function Contacts() {
  return (
    <div>
      <h3 className="font-semibold text-sm px-1 py-2 mb-2">Contacts</h3>
      <div className="space-y-2">
        {data.map((user) => (
          <div key={user._id} className="flex items-center gap-2 p-1 h-8">
            <Avatar className="size-6">
              <AvatarImage src={user.imgSrc} alt={`image of user ${user.name}`} />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <h5 className="line-clamp-1 text-sm capitalize">{user.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Contacts };
