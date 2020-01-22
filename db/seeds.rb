Rake::Task['db:drop'].invoke
Rake::Task['db:create'].invoke
Rake::Task['db:migrate'].invoke

Category.create([
  {
    tag_list: "vegetarian"
  },{
    tag_list: "vegan"
  },{
    tag_list: "asian"
  },{
    tag_list: "fastfood"
  },{
    tag_list: "drinks"
  },{
    tag_list: "pastry"
  }
])

Batch.create([
  {
    company_name: "1"
  },{
    company_name: "2"
  }
])

Product.create([
  {
    name: "Бананы",
    weight_type: "кг",
    quantity: 21,
    price: 50,
    sale_price: 45,
    company_name: "Перекрёсток",
    category_id: 1,
    batch_id: 1
  },{
    name: "Молоко",
    weight_type: "шт",
    quantity: 21,
    price: 50,
    sale_price: 45,
    company_name: "Перекрёсток",
    category_id: 2,
    batch_id: 1
  },{
    name: "Рыба",
    weight_type: "кг",
    quantity: 21,
    price: 50,
    sale_price: 45,
    company_name: "Перекрёсток",
    category_id: 3,
    batch_id: 2
  },{
    name: "Хотдог",
    weight_type: "шт",
    quantity: 21,
    price: 50,
    sale_price: 45,
    company_name: "Перекрёсток",
    category_id: 3,
    batch_id: 1
  },{
    name: "Бутерброд",
    weight_type: "шт",
    quantity: 21,
    price: 50,
    sale_price: 45,
    company_name: "Перекрёсток",
    category_id: 4,
    batch_id: 2
  },{
    name: "Макароны",
    weight_type: "шт",
    quantity: 21,
    price: 50,
    sale_price: 45,
    company_name: "Перекрёсток",
    category_id: 6,
    batch_id: 2
  }
])
