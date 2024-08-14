type UserCardProps = {
  name?: string;
  age?: number;
};

function UserCard({ name = "user", age }: UserCardProps) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age ? age : "Didn't get your age"}</p>
    </div>
  );
}
export default UserCard;
