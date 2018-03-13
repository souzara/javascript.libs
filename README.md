# javascript.libs
Bibliotecas helpers para agilizar o uso de tipos nativos



Criar nova lista

var list = new List();

Adicionar Item para a lista;

var obj = {
   name: 'Paul', 
   age: 34
};

list.Add(obj);

Adicionar range de itens para a lista;

var items  = [{
   name: 'Paul', 
   age: 34
},{
   name: 'Lucas', 
   age: 23
}]

list.AddRange(items);

Executar loop na lista

list.ForEach(function(item){
	console.log(item.name);
});

Verificar se existe item apartir de um predicado

var predicate = function(item){
	return item.name === 'Paul';
 
};
var result = list.Exists(predicate);
console.log(result);//saida igual a  true/false

Encontrar elemento na lista

var predicate = function(item){
	return item.name === 'Paul';
 
};
var result = list.Find(predicate);
console.log(result.name);//saida igual a 'Paul'

Encontra index de um elemento na lista obs: este metodo transforma os objetos em json para comparação, para objetos complexos pode consumir demasiado recursos.

var obj = {
   name: 'Lucas', 
   age: 23
};

var index = list.IndexOf(obj);

console.log(index);//saida igual a  1

Remover item da lista apartir de um item

var obj = {
   name: 'Lucas', 
   age: 23
};

list.Remove(obj);

Remover item da lista apartir do index

//remove o item do index 1 da lista
list.RemoveAt(1);

Inverter os itens da lista ( alias para função nativa Array.reverse)

list.Reverse();

Limpando a lista

//limpa a lista
list.Clear();

