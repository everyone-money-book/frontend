import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { useHistory, useParams } from "react-router-dom";

import { contentsActions } from "../redux/modules/contents";

const EditAccount = (props) => {
  // const { recordId } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  console.log(params);
  const list_index = params.id;
  console.log(list_index);
  const moneybook_list = useSelector((state) => state.contents.list);
  const moneybook_idx = moneybook_list.findIndex(
    (p) => p.id === parseInt(list_index)
  );
  const moneybook = moneybook_list[moneybook_idx];
  console.log(moneybook);

  const [contents, setContents] = React.useState("");
  const [cost, setCost] = React.useState('');
  console.log(cost);
  const [category, setCategory] = React.useState('');

  // const updateAccount = () => {
  //   dispatch(
  //     updateContents({
  //       category: category,
  //       cost,
  //       desc,
  //       title: `${category} ${desc} ${cost}`,
  //     })
  //   );
  //   history.goBack();
  //   console.log(category, cost, desc);
  // };

  const updateDictionary = () => {
    const updateData = {
      category: category,
      cost: cost,
      contents: contents,
    };
    console.log(updateData);
    dispatch(contentsActions.updateContents(updateData));
    history.goBack();
  };

  return (
    <React.Fragment>
      <AddWrap>
        <Title>가계부 수정하기 🔍</Title>
        <TextBox>
          <Grid is_flex padding="16px 0">
            <Text>카테고리</Text>
            <select
              style={{ width: "360px", padding: "10px 0", borderRadius: "4px" }}
              value={moneybook.category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="">카테고리</option>
              <option value="식비">식비</option>
              <option value="교통비">교통비</option>
              <option value="주거비">주거비</option>
              <option value="뷰티 및 패션">뷰티 및 패션</option>
              <option value="취미활동">취미활동</option>
            </select>
          </Grid>
          <Grid is_flex padding="16px 0">
            <Text>지출액</Text>
            <Input
              width="360px"
              padding="10px 0"
              value={moneybook.cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </Grid>
          <Grid is_flex padding="16px 0">
            <Text>내용</Text>
            <Input
              width="360px"
              padding="10px 0"
              value={moneybook.contents}
              onChange={(e) => {
                setContents(e.target.value);
              }}
            />
          </Grid>
          <Grid is_between>
            <Button
              width="140px"
              margin="20px 0 0 0"
              padding="12px 0"
              radius="4px"
              onClick={updateDictionary}
            >
              수정
            </Button>
            <Button
              width="140px"
              margin="20px 0 0 0"
              padding="12px 0"
              radius="4px"
              onClick={(e) => {
                dispatch(contentsActions.deleteContents(moneybook_idx));
                history.replace("/");
              }}
            >
              삭제
            </Button>
          </Grid>
        </TextBox>
      </AddWrap>
    </React.Fragment>
  );
};
const AddWrap = styled.div`
  margin: 100px 10vh;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

const TextBox = styled.div`
  width: 450px;
  margin: 50px auto 0;
`;
export default EditAccount;
