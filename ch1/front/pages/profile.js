import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "원종인" },
    { nickname: "박지성" },
    { nickname: "손흥민" },
  ];

  const followingList = [
    { nickname: "원종인" },
    { nickname: "박지성" },
    { nickname: "손흥민" },
  ];

  return (
    <AppLayout>
      <NicknameEditForm />
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <FollowList header="팔로워 목록" data={followerList} />
      <FollowList header="팔로잉 목록" data={followingList} />
    </AppLayout>
  );
};

export default Profile;
