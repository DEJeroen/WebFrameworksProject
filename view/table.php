<div class="container angulardata">
<h1>Wifihotspots Antwerpen</h1>           
  <table class="table table-bordered table-responsive">
    <thead>
    <tr>
      <th>Straat</th>
      <th>Huisnummer</th>
      <th>Gemeente</th>
      <th>Postcode</th>
    </tr>
      <tr ng-repeat="x in json">
        <td>{{x.straat}}</td>
        <td>{{x.huisnr}}</td>
        <td>{{x.gemeente}}</td>
        <td>{{x.postcode}}</td>
      </tr>
    </tbody>
  </table>
</div>


</div>
</div> 