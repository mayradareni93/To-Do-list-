function TodoCtrl($scope) {//permite que los datos que se manejan en los controladores pasen a ser vistos y viceversa 
  
  $scope.todos = [ // arreglo que muestra el to do list por default
    {text:'Learn AngularJS', done:false},         
    {text: 'Build an app', done:false}
  ];
  
  $scope.getTotalTodos = function () { //Obtiene el listado del arreglo
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () { //Captura el texto que se escribe en el input "formTodoText"
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
    $scope.clearCompleted = function () { //Limpia el arreglo y lo regresa al valor por defecto
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
}