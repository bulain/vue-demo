<style scoped>
.grid .ivu-col {
    text-align: center;
    background-color:aqua;
}
</style>

<template>
    <div class="grid">
        <Row>
            <Col span="12">col-12</Col>
            <Col span="12">col-12</Col>
        </Row>
        <br>
        <Row type="flex">
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
        </Row>
        <br>
        <Row :gutter="16">
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
        </Row>
        <br>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8" offset="8">col-8</Col>
        </Row>
        <br>
        <Row type="flex" justify="start">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <br>
        <Row type="flex" justify="end">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <br>
        <Row type="flex" justify="center">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <br>
        <Row type="flex" justify="space-between">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <br>
        <Row type="flex" justify="space-around">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
    </div>
</template>

<script>
export default {};
</script>
