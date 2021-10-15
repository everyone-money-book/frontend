import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
// import { createContents } from "../redux/modules/contents";
import { useHistory } from "react-router";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_orange.css";
import "react-datepicker/dist/react-datepicker.css";

import { contentsActions } from '../redux/modules/contents';

// import { useForm } from 'react-hook-form';
const AddAccount = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const date = new Date().toUTCString();
  // .toUTCString()
  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );
  const [startDate, setStartDate] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [contents, setContents] = useState("");
  let accDate = startDate.split('T')[0];

  const recordAccount = () => {
    dispatch(
      contentsActions.createContentsAPI({
        id: 1,
        date: accDate,
        category: category,
        cost,
        contents,
        title: `${category} ${contents} ${cost}`,
      })
    );
    console.log(accDate, category, cost, contents);
  };


  return (
    <React.Fragment>
      <AddWrap>
        <Title>가계부 작성하기 💸</Title>
        <TextBox>
          <Grid is_flex>
            <Text>일시</Text>
            {/* <Flatpickr
              ref={date_Ref}
              // data-enable-time
              data-able-time
              value={date}
              onChange={(date) => {
                setStartDate(date.flatpickr.selectedDates[0].toUTCString());
              }}
            /> */}

            {/* <div ref={containerRef}>
              <Flatpickr
                appendTo={container}
                onChange={(date) => setStartDate(date)}
                enableTime={false}
                dateFormat={"Y-m-d"}
              />
            </div> */}
            {/* <DatePicker
              format="yyyy-MM-dd"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            /> */}

            <Input
              type="datetime-local"
              placeholder="예시) 2021-10-15"
              width="360px"
              padding="10px 0"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}

            />
          </Grid>
          <Grid is_flex padding="16px 0">
            <Text>카테고리</Text>
            <select
              style={{ width: "360px", padding: "10px 0", borderRadius: "4px" }}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="카테고리">카테고리</option>
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
              onChange={(e) => {
                setContents(e.target.value);
              }}
            />
          </Grid>
          <Grid>
            <Button
              position
              width="160px"
              margin="20px 0 0 0"
              padding="12px 0"
              radius="4px"
              onClick={recordAccount}
            >
              기록하기
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
export default AddAccount;
