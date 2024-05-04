import connectToDB from "@/utils/database";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/user";

const handler = NextAuth({
  providers: [
    CredentialsProvider(<any>{
      id: "credentials",
      name: "Credentials",
      async authorize(credentials: any) {
        await connectToDB();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),
  ],
});
export { handler as GET, handler as POST };
