import React from "react";
import Layout from "../hoc/Layout";
import SearchBar from "../_components/RepoSearcher/SearchBar";
import ReposList from "../_components/RepoSearcher/ReposList";

function RepoSearcher() {
  return (
    <>
      <Layout>
        <SearchBar />
        <ReposList />
      </Layout>
    </>
  );
}

export default RepoSearcher;
