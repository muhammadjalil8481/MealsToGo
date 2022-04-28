import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import { LocationContext } from "../../../Services/Location/location.context";
import {
  locationRequest,
  locationTransform,
} from "../../../Services/Location/location.service";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, [Search]);

  return (
    <Styled_Search>
      <Searchbar
        placeholder="Search for Location"
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </Styled_Search>
  );
};

const Styled_Search = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
